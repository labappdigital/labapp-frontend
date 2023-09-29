import HomePageSectionEntry from '@/components/HomePageSectionEntry'
import HomePageSectionLabApp from '@/components/HomePageSectionLabApp'
import HomePageSectionProcess from '@/components/HomePageSectionProcess'
import HomePageSectionBottom from '@/components/HomePageSectionBottom'
import HomePageSectionAbout from '@/components/HomePageSectionAbout'
import { getResources, getResourcesPlaylist } from '@/sanity/actions'

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined }
}

const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  })

  const resourcesPlaylist = await getResourcesPlaylist();
  
  console.log(resourcesPlaylist)

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <HomePageSectionEntry />
      <HomePageSectionLabApp />
      <HomePageSectionProcess />
      <HomePageSectionAbout />
      <HomePageSectionBottom />
    </main>
  )
}

export default Page