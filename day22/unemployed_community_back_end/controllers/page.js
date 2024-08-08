// const { getAttributes } = require("../models/post");

// exports.renderMain = async (req, res, next) => {
//   try {
//     const posts = await post.findAll({
//       include: {
//         model: User,
//         attributes: ['id', 'nick']
//       },
//       order: [["createdAt", "DESC"]],
//     });
//     res.render("main", {
//       title: "NodeBird",
//       twits: posts,
//     });
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };

// exports.renderDetail = async (req, res, next) => {
//   const query = req.query.hashtag;
//   if (!query) {
//     return res.red.redirect('/');
//   }

//   try {
//     const hashtag = await hashtag.findOne({
//       where: {
//         title: query,
//       }});
//       let posts = [];
//       if (hashtag) {
//         post = await hashtag.getposts({include: [{model:User}]})
//   }
//   return res.render('main', {
//     title: '#${query} | nodeBird',
//     twits:posts,
//   });
// }
//    catch (error) {
//     console.error(error);
//     next(error);
//     return next(error)
//    }

//  }

//   const twits = [];
//   res.render("main", {
//     title: "NodeBird",
//     twits,
//   });
// };
const { User, Post, Hashtag } = require("../models");

exports.renderMain = async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ["id", "nick"],
      },
      order: [["createdAt", "DESC"]],
    });
    res.render("main", {
      title: "NodeBird",
      twits: posts,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.renderDetail = async (req, res, next) => {
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect("/");
  }

  try {
    const hashtag = await Hashtag.findOne({
      where: {
        title: query,
      },
    });
    let posts = [];
    if (hashtag) {
      posts = await hashtag.getPosts({ include: [{ model: User }] });
    }
    return res.render("main", {
      title: `#${query} | NodeBird`,
      twits: posts,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
