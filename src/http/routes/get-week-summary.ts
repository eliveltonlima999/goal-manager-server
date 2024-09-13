import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekSummary } from '../../functions/get-week-summary'

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async (
  app,
  _opts
) => {
  app.get('/summary', async () => {
    const weekSummary = await getWeekSummary()

    return weekSummary
  })
}
