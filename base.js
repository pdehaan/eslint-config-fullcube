module.exports = {
  'extends': [ 'strict' ],
  'rules': {
    // Blacklist certain identifiers to prevent them being used
    'id-blacklist': 0,
    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': [
        2,
        {
            // identifiers must be a minimum of 3 characters
            'min': 3,
            // ... and a max of 50
            'max': 50,
            // ... but `i`, `x`, and `y` are allowed
            'exceptions': [ 'i', 'x', 'y', '_', 'cb', 'lt', 'gt', 'id', 'in', 'is', 't', 'db', 'fs', 'ip', 'js', 'Fc' ]
        },
    ],
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
    'no-underscore-dangle': [0],

    // disallow the use of magic numbers
    'no-magic-numbers': [0],

    // disallow declaration of variables already declared in the outer scope (but allow err and res)
    'no-shadow': [2, {'allow': ['err', 'res']}],

    // require parens in arrow function arguments only when needed
    'arrow-parens': [2, 'as-needed'],

    // Enforces Stroustrup style brace formatting
    'brace-style': [2, 'stroustrup'],

    // Warn if there is a missing trailing comma on arrays or objects that span multiple lines
    'comma-dangle': [2, 'never'],

    // Never require a space before function opening parenthesis
    'space-before-function-paren': [2, 'never'],

    // Do not enforce camel case property names.
    'camelcase': [2, {'properties': 'never'}],

    // Disable use strict rule.
    'strict': [0],

    // Disable max-statements rule.
    'max-statements': [0],

    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': 0,

    // Allow fixme, todo etc.
    "no-warning-comments": 0,

    // TEMP: Disable the complexity rule for the time being.
    "complexity": 0,

    // TEMP: Increase the allowed maximum number of function paramaters for the time being.
    "max-params": [2, 7],

    // TEMP: Disable the chek of usage of this outside classes.
    "no-invalid-this": 0,

    // Don't prefer Reflect.
    "prefer-reflect": 0,

    // enforce spacing around embedded expressions of template strings
    "template-curly-spacing": [2, "never"],

    // allow confusing arrow function returns when wrapped in parens.
    "no-confusing-arrow": [2, { "allowParens": true } ],

    // Allow inline comments.
    "no-inline-comments": 0,

    // Allow padding at the top and bottom of blocks.
    "padded-blocks": 0
  }
};
