module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5049fd3976a866949f81846e264d13bb'),
  },
});
