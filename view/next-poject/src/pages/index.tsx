import ThreeScene from '@/compornents/common/ThreeScene/ThreeScene'
import MainLayout from '@/compornents/layout/MainLayout/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <ThreeScene />
      <h1 style={{ color: 'white', textAlign: 'center', marginTop: '50%' }}>
        ここにコンテンツが入ります
      </h1>
    </MainLayout>
  )
}
