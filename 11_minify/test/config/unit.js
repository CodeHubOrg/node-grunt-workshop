basePath = '../..';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'vendor/jquery/jquery.min.js',
    'dist-test/**/*.js'
];

reporters = 'dots';
port = 8089;
runnerPort = 9109;
urlRoot = '/__test/';
colors = true;
logLevel = LOG_INFO;
autoWatch = false;
autoWatchInterval = 0;
browsers = ['Chrome'];
singleRun = true;
