import { getContributions } from '@/lib/github'
import { profile } from '@/data/content'
import ContributionsView from '@/components/contributions-view'

export default async function Contributions() {
  const data = await getContributions(profile.githubUsername)

  return <ContributionsView data={data} />
}
