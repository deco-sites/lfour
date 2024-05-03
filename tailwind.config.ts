import daisyui from 'daisyui';

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ['./**/*.tsx'],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: 'sliding 30s linear infinite',
      },
      keyframes: {
        sliding: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'detalhe-1':
          "url('//ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8604/dc02980d-641f-4b5c-bb44-92c4111df3b1')",
        'detalhe-2':
          "url('//ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8604/8dafbffa-642e-40f3-b12b-acbfc8a4396a')",
        'detalhe-3':
          "url('//ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8604/504f8212-c580-4e52-9635-314007d47cd8')",
      },
    },
  },
};
