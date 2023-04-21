// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// reset using tailind
export const unoCssReset = '@unocss/reset/tailwind.css'

export default defineConfig({
  shortcuts: [],
  theme: {
    colors: {},
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  presets: [
    presetUno(),
    presetIcons(),
  ],
})
