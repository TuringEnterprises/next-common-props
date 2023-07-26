import { GetStaticPropsContext } from 'next'
import nextCommonProps from './plugin'

export interface LoaderConfig {
  locale?: string
  router?: { locale: string }
  pathname?: string
  skipInitialProps?: boolean
  loaderName?: string
  isLoader?: boolean
  [key: string]: any
}

export interface NextCommonPropsLoader {
  key: string
  data: (context: GetStaticPropsContext) => Promise<any>
  exclusion?: Record<string, boolean>;
}

export interface NextCommonPropsConfigResult {
  [key: string]: NextCommonPropsLoader[]
}

export interface NextCommonPropsConfig {
  (): NextCommonPropsConfigResult
}

module.exports = nextCommonProps
