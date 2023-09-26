import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import { animatedUno } from 'animated-unocss'

export default defineConfig({
  rules: [
    [ /^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` }) ],
    [ /^p-(\d+)$/, match => ({ padding: `${match[1]} / 4 }rem`}) ]
  ],
  shortcuts: [
    {
      'btn-green': 'text-white bg-green-500 hover:bg-green-500', // 여러 class 합치기
      'red': 'text-red-100', // 하나의 class를 다른 규칙으로 명명
    },
    // 여러 class에 정규표현식 적용
    [ /^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg` ],
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetScrollbar({
      scrollbarWidth: '6px',
      scrollbarHeight: '6px',
      scrollbarThumbColor: '#60a5fa',
    }),
    presetTypography(),
    animatedUno(),
    presetWebFonts({
      provider: {
        name: 'none',
        getImportUrl: () => 'https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})