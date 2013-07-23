
Package.describe({
    summary: "Client side console.log replacement by Paul Irish."
});

Package.on_use(function (api) {
    api.add_files('lib/log.js', 'client');
});
