import React, { useEffect } from 'react'
import { TopBar } from '../components/TopBar'
import { Button } from '../components/Button'
import { fetchDashboard } from '../redux/dashboard.redux'
import { logoutUser } from '../redux/session.redux'
import { useDispatchAction, useStatePath } from '../helpers/hooks'
import { DashboardTaskView } from './dashboard/DashboardTaskView'
import { DashboardSummaryView } from './dashboard/DashboardSummaryView'
import { DashboardEmptyView } from './dashboard/DashboardEmptyView'

export const DashboardView = () => {
  const totalTasks = useStatePath('dashboard.totalTasks', 0)
  const status = useStatePath('dashboard.status', 0)
  const userName = useStatePath('session.name', '')
  const loading = status === 'pending'
  const hasTask = totalTasks > 0

  const dispatchFetchDashboard = useDispatchAction(fetchDashboard)
  useEffect(() => {
    dispatchFetchDashboard()
  }, [dispatchFetchDashboard])

  const dispatchLogoutUser = useDispatchAction(logoutUser)

  return (
    <div>
      <TopBar userName={userName} userImg={''}>
        <Button onClick={() => dispatchLogoutUser()}>Logout</Button>
      </TopBar>
      <div className={'container pt-5'}>
        {hasTask && (
          <>
            <DashboardSummaryView />
            <DashboardTaskView />
          </>
        )}
        {!loading && !hasTask && <DashboardEmptyView />}
      </div>
    </div>
  )
}
