import React from 'react';

const userData = {
  chul: {
    job: 'programmer',
    live: 'seoul'
  },
  james: {
    job: 'student',
    live: 'suwon'
  }
};

const User = ({ match }) => {
  const { username } = match.params;
  const user = userData[username];

  if (!user) {
    return <div>유저 정보가 없습니다</div>;
  } else {
    return (
      <div>
        <h3>{username}</h3>
        <p>
          {user.job}-{user.live}
        </p>
      </div>
    );
  }
};

export default User;
