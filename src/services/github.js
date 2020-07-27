export const userLookup = (login) => {
  return fetch(`https://api.github.com/users/${login}`, {
    method: 'GET',
    headers: {
      'User-Agent': 'fetch-api'
    }
  })
    .then(res => res.json())
    .then(({ login, url, avatar_url, followers, following }) => ({
      login: login,
      url: url,
      avatar_url: avatar_url,
      followers: followers,
      following: following
    }));
};

export const userRepos = (login) => {
  return fetch(`https://api.github.com/users/${login}/repos`, {
    method: 'GET',
    headers: {
      'User-Agent': 'fetch-api'
    }
  })
    .then(res => res.json())
    .then((repos) => (
      repos.map(({
        id,
        node_id,
        name,
        html_url,
        description,
        created_at,
        updated_at,
        homepage,
        size,
        language
      }) => ({
        id,
        node_id,
        name,
        html_url,
        description,
        created_at,
        updated_at,
        homepage,
        size,
        language
      }))
    ));
};
