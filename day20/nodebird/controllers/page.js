// ++ 맨위에 데이터베이스 연결 ++





exports.renderProfile = (req, res) => {
  res.render('profile', { title: '내 정보 - NodeBird' });
};

exports.renderJoin = (req, res) => {
  res.render('join', { title: '회원가입 - NodeBird' });
};

exports.renderMain = (req, res, next) => {
  const twits = [];
  res.render('main', {
    title: 'NodeBird',
    twits,
  });
};

// exports.renderProfile = (req, res) => {
//   res.render(++ 여기에 경로설정++ 'profile', { title: '내 정보 - NodeBird' });
// };

// 이걸 그대로 써도 좋음. 잘... 만든다면....
