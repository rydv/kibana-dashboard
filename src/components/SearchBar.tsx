import React from 'react';
import './SearchBar.css';

interface ISearchBarProps {
  onSearch: (query: string) => void;
}

class SearchBar extends React.Component<ISearchBarProps, { query: string }> {
  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearch(this.state.query);
  };

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search saved objects..."
          value={this.state.query}
          onChange={this.handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
