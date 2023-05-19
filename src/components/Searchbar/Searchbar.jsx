import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import {Form, SearchbarHeader, SearchButton, SearchButtonLabel, SearchInput} from './Searchbar.styled'

export class Searchbar extends Component {

    state = {
        name:'',
    }

    handleInputChange = event => {
        this.setState({name: event.target.value.toLowerCase()})
    }

    handleSubmit = event => {
      event.preventDefault()
    

        if (this.state.name.trim() === '') {
            alert("Please, enter your search request")
            return
        }

        this.props.onSubmit (this.state.name)
        
      this.setState({ name: '' })
      
       
    }
    render() {
        return (
        <SearchbarHeader>
  <Form onSubmit={this.handleSubmit}>
    <SearchButton type="submit" >
        <ImSearch style={{ marginRight: 8 }} />
      <SearchButtonLabel>Search</SearchButtonLabel>
    </SearchButton>

    <SearchInput onChange = {this.handleInputChange}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.name}
    />
  </Form>
</SearchbarHeader>
    )
}
}