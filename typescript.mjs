import tseslint from 'typescript-eslint';

export default tseslint.config(
    ...tseslint.configs.recommended,
    {
        name: 'typescript',
        files: ['*.ts', '*.tsx', '**/*.ts', '**/*.tsx'],
        rules: {
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-unused-expressions': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-extra-semi': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    args: 'after-used',
                    ignoreRestSiblings: false,
                    argsIgnorePattern: '^_',
                },
            ],
        },
    }
)

