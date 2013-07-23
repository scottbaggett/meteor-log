
Package.describe({
    summary: "Meteor client console.log replacement by Paul Irish."
});

Package.on_use(function (api) {
    api.add_files('lib/log.js', 'client');
});
