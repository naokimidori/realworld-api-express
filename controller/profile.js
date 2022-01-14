exports.getProfiles = async (req, res, next) => {
  try {
    res.send('getProfiles')
  } catch (err) {
    next(err)
  }
}

exports.followUser = async (req, res, next) => {
  try {
    res.send('followUser')
  } catch (err) {
    next(err)
  }
}

exports.unfollowUser = async (req, res, next) => {
  try {
    res.send('unfollowUser')
  } catch (err) {
    next(err)
  }
}