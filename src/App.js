import { View } from 'react-native'
import React, { useState } from 'react'
import Transaction from './pages/Transaction'
import TabBar from './components/molecules/TabBar'
import Products from './pages/Products'

const App = () => {
  const [activeTab, setActiveTab] = useState('Transaction')

  const handleTabBar = (tab) => {
    setActiveTab(tab)
  }
  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <>
        {activeTab === 'Transaction' && <Transaction />}
        {activeTab === 'Products' && <Products />}
      </>
      <TabBar handleTab={handleTabBar} activeTab={activeTab} />
    </View>
  )
}

export default App