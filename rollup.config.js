import livereload from 'rollup-plugin-livereload';

export default {
    input: 'src/app.js',
    output: {
        file: 'dist/build/bundle.js'
    },
    plugins: [livereload()],
}