import HvA from '$lib/components/HvA.svelte'
import { render } from 'svelte/server'
import { responseInit } from '$lib/utils/responseInit'

export function GET({ params }) {
  return new Response(
    render(HvA, {
      props: Object.fromEntries(params.options.split('/').map((param) => param.split('-'))),
    }).body,
    responseInit
  )
}
