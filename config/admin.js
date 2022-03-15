module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6a85b42008a8f5a70d685625f092a632'),
  },
});
