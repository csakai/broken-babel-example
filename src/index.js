// // neither named capture groups nor positive lookahead/lookbehind
// const resourceIdPathPattern = /:([a-zA-Z]+?Id|id)/

// // Named capture group only
// const resourceIdPathPattern = /\/:(?<key>[a-zA-Z]+?Id|id)/

// // Positive lookahead only
// const resourceIdPathPattern = /:([a-zA-Z]+?Id(?=\/)|id)/

// // Positive lookbehind only
// const resourceIdPathPattern = /(?<=\/):([a-zA-Z]+?Id|id)/

// // Positive lookahead/lookbehind only
// const resourceIdPathPattern = /(?<=\/):([a-zA-Z]+?Id(?=\/)|id)/

// Both named capture group and positive lookahead only
// const resourceIdPathPattern = /:(?<key>[a-zA-Z]+?Id(?=\/)|id)/

// All of the above regexes can be transpiled with babel just fine,
// but when both the named capture group and positive lookbehind
// are present, babel throws a StackOverflow error

// Both named capture group and Positive lookbehind only
const resourceIdPathPattern = /(?<=\/):(?<key>[a-zA-Z]+?Id|id)/

// // Both named capture group and positive lookahead/lookbehind
// const resourceIdPathPattern = /(?<=\/):(?<key>[a-zA-Z]+?Id|id)/
