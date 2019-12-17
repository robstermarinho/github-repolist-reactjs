import React, { Component } from 'react';
import { Form, SubmitButton, List, ErrorMsg } from './styles';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Container from '../../components/Container';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: null,
    errorMsg: null,
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value, error: null, errorMsg: null });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;
    let msg;
    try {
      if (newRepo === '') {
        msg = 'You need to specify a repository name.';
        this.setState({ errorMsg: msg });
        throw msg;
      }

      const hasRepo = repositories.find(r => r.name === newRepo);

      if (hasRepo) {
        msg = 'Duplicated Repository';
        this.setState({ errorMsg: msg });
        throw msg;
      }

      const response = await api.get(`/repos/${newRepo}`);
      const data = {
        name: response.data.full_name,
        avatar: response.data.organization.avatar_url,
      };
      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
      });
    } catch (error) {
      if (error.response) {
        msg = error.response.data.message;
        this.setState({ errorMsg: msg });
        throw msg;
      }

      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleDelete = repository => {
    const { repositories } = this.state;

    const allRepositories = [...repositories];

    const index = allRepositories.findIndex(r => r.name === repository);

    if (index !== -1) {
      allRepositories.splice(index, 1);
      this.setState({ repositories: allRepositories });
    }
  };

  render() {
    const { newRepo, repositories, loading, error, errorMsg } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt className="gh_icon" />
          Repositories
        </h1>
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        <Form onSubmit={this.handleSubmit} error={error} disabled={loading}>
          <input
            type="text"
            placeholder="Add Repository (e.g. facebook/react)"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading.toString()}>
            {loading ? (
              <FaSpinner color="#fff" size={20} />
            ) : (
              <FaPlus color="#fff" size={20} />
            )}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map(rep => (
            <li key={rep.name}>
              <img src={rep.avatar} alt={rep.name} />
              <span>{rep.name}</span>
              <div>
                <Link to={`/repository/${encodeURIComponent(rep.name)}`}>
                  Details
                </Link>
                <a href="#" onClick={() => this.handleDelete(rep.name)}>
                  Remove
                </a>
              </div>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
