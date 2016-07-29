module.exports = {
  'extends': [ 'strict' ],
  'rules': {
    // Blacklist certain identifiers to prevent them being used
    'id-blacklist': ['off'],
    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': ['off'],
    // require identifiers to match the provided regular expression
    'id-match': [
        2,
        // identifiers must always be camel cased, and never have two
        // or more contiguous upper case characters.
        // Alternatively they can be all uppercase.
        '^([A-Z_]{2,}|[A-Z]?[a-z]+([A-Z]{1,2}[a-z]+)*[A-Z]?|id|JSON|_|_.*|.*[Ii]ndexedDB|getMatchedCSSRules|.*SKU)$',
        {
            // identifiers in properties are also checked
            'properties': false,
        }
    ],
    // allow/disallow an empty newline after var statement
    'newline-after-var': [
        2,
        'always',
    ],
    // allow/disallow dangling underscores in identifiers
    'no-underscore-dangle': ['off'],

    // disallow the use of magic numbers
    'no-magic-numbers': ['off'],

    // disallow declaration of variables already declared in the outer scope (but allow err and res)
    'no-shadow': ['error', {'allow': ['err', 'res']}],

    // require parens in arrow function arguments only when needed
    'arrow-parens': ['error', 'as-needed'],

    // Enforces Stroustrup style brace formatting
    'brace-style': ['error', 'stroustrup'],

    // Warn if there is a missing trailing comma on arrays or objects that span multiple lines
    'comma-dangle': ['error', 'never'],

    // Never require a space before function opening parenthesis
    'space-before-function-paren': ['error', 'never'],

    // Do not enforce camel case property names.
    'camelcase': ['error', {'properties': 'never'}],

    // Disable use strict rule.
    'strict': ['off'],

    // Disable max-statements rule.
    'max-statements': ['off'],

    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': ['off'],

    // Allow fixme, todo etc.
    'no-warning-comments': ['off'],

    // TEMP: Disable the complexity rule for the time being.
    'complexity': ['off'],

    // TEMP: Increase the allowed maximum number of function paramaters for the time being.
    'max-params': ['error', 7],

    // TEMP: Disable the chek of usage of this outside classes.
    'no-invalid-this': ['off'],

    // Don't prefer Reflect.
    'prefer-reflect': ['off'],

    // enforce spacing around embedded expressions of template strings
    'template-curly-spacing': ['error', 'never'],

    // allow confusing arrow function returns when wrapped in parens.
    'no-confusing-arrow': ['error', { 'allowParens': true } ],

    // Allow inline comments.
    'no-inline-comments': ['off'],

    // Allow padding at the top and bottom of blocks.
    'padded-blocks': ['off'],

    // Require no semi colon.
    'semi': ['error', 'never'],

    // Require dangling commas.
    'comma-dangle': [ 'error', 'always-multiline' ]
  }
};
