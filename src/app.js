// import GithubApiWrapper from 'github-api-wrapper';


// const github = GithubApiWrapper.getRepoList();

// github
//   .then(data => {
//   console.log('data', data);

// });

import './styles/main.scss';


// import _ from 'lodash'; //ES6 import to check our babel loader

// const array = [1];
// const other = _.concat(array, 2, [3], [[4]]);

// console.log(other); //[1, 2, 3, [4]]


import GithubApiWrapper from 'github-api-wrapper';

const repoListEl = document.getElementById('repoListEl');
const github = GithubApiWrapper.getRepoList();

github
  .then(data => {
  // const markup = data.map(item =>
  //   `<p>${item.name}</p>`
  // ).join('');

  //console.log('markup', markup);
  console.log('data', data);
  //repoListEl.innerHTML = markup;
});
