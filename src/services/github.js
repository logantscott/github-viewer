export const userDetails = (login) => {
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
