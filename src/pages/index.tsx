import Layout from 'components/Layout'
import MessageForm from 'components/MessageForm'
import MessagesList from 'components/MessageList'
import { NextPage } from 'next'
import { MessagesProvider } from 'utils/useMessages'

const IndexPage: NextPage = () => {
  return (
    <MessagesProvider>
      <Layout>
        {/* Main container that takes full screen */}
        <div className="flex flex-col h-screen">
          {/* Container for the MessagesList */}
          <div className="flex-1 overflow-y-auto pb-[160px]">
            <MessagesList />
          </div>

          {/* Fixed MessageForm at the bottom */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 p-4 z-10">
            <MessageForm />
          </div>
        </div>
      </Layout>
    </MessagesProvider>
  )
}

export default IndexPage
