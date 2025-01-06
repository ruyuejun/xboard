import typescript from 'rollup-plugin-typescript2'

export default {
    input: 'src/main.ts',
    output: [
        {
            file: './dist/xboard.js',
            name: 'Xboard',
            format: 'umd',
            sourcemap: false,
            freeze: false
        }
    ],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json'
        })
    ],
    external: []
}
