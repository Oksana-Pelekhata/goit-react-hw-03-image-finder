import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { fetchPictures } from '.././services/pixabayApi'
import { Loader } from './Loader'
import { ImageErrorView } from './ImageErrorView'
import { ImageGallery } from './ImageGallery'
import { Button } from './Button'
import { Wrapper } from './Wrapper/Wrapper';


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {

  state = {
    name: '',
    pictures: [],
    error: null,
    status: Status.IDLE,
    page: 1,
  }

   componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.name;
     const nextName = this.state.name;
     const prevPage = prevState.page;
     const nextPage = this.state.page

    if (prevName !== nextName|| prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });

      
         fetchPictures(nextName, nextPage)
          .then(({hits}) => this.setState( ({pictures}) => ({pictures: [...pictures, ...hits],status: Status.RESOLVED})))
          .catch(error => this.setState({ error, status: Status.REJECTED }));
     
    }
  }

  handleSearchFormSubmit = name => {
    console.log(name)
    this.setState({
      name: name,
      page: 1,
      pictures: [],
    })
  }

  handleLoadMoreBtnClick = () => {
   this.setState(({ page }) => ({
      page: page + 1,
    }));
  
  };
  render() {
    const { pictures, error, status, page} = this.state;
    return (
       <Wrapper>
        <Searchbar onSubmit={ this.handleSearchFormSubmit} />
    
    { status === 'pending' && <Loader /> }
    { status === 'resolved' && <ImageGallery pictures={pictures}  /> }
        {status === 'rejected' && <ImageErrorView message={error.message} />} 
        {pictures.length !== 0 && (pictures.length /12) === page && <Button LoadMoreBtnClick={this.handleLoadMoreBtnClick} />}
      </Wrapper>
    )
  
  }
}

