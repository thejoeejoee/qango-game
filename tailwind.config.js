const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./model/*.ts'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
    },
  },
};
