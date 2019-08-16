// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Search.module.css';
import { searchRequest } from '../../reducers/actions';
import { ShowPreview } from '../ShowPreview';

class Search extends Component {
  state = { value: '' };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  onSubmit = () => {
    const { value } = this.state;
    const { searchRequest } = this.props;

    if (value) {
      searchRequest(value);
    }
  };

  render() {
    const { shows, isLoading } = this.props;

    return (
      <div>
        <div className={styles.previewList}>
          <input
            className={styles.input}
            placeholder="Название сериала"
            type="text"
            onChange={this.onChange}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.button} t-search-button`}
              onClick={this.onSubmit}
            >
              Найти
            </button>
          </div>
          {isLoading && <div>Идет поиск</div>}
        </div>
        <div className={styles.searchPanel}>
          {shows.map(({ image, name, id, summary }) => (
            <ShowPreview
              key={id}
              image={image}
              name={name}
              id={id}
              summary={summary}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: state.search.shows,
  isLoading: state.search.isLoading
});

const mapDispatchToProps = { searchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
