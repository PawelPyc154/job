/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import clsx from 'clsx'
import { useUser } from 'components/context/userProvider'
import { NavLink } from './navLink'
import { Logo } from './components/logo'
import { MobileTopBar } from './components/mobileTopBar'
import { User } from './components/user'

const settingPath = {
  employer: '/employer/settings',
  candidate: '/candidate/settings',
} as const

const userTypeLinks = {
  employer: <NavLink href="/employer/my-job-offers">My job offers</NavLink>,
  candidate: (
    <>
      <NavLink href="/candidate/my-applications">My applications</NavLink>
      <NavLink href="/candidate/my-profile">My profile</NavLink>
    </>
  ),
}

const Navigation = () => {
  const user = useUser()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  return (
    <>
      <nav
        className={clsx(
          'fixed xl:static bg-white inset-0 xl:w-52 2xl:w-60 grid grid-rows-[max-content,1fr,max-content] pt-6 pb-6 gap-6 shadow-lg z-40',
          isOpenMenu ? 'grid' : 'hidden xl:grid',
        )}
      >
        <Logo className="hidden xl:flex" />
        <div className="grid content-start gap-6 px-2 row-span-2 mt-2 xl:(row-span-1 mt-4)">
          <div className="grid gap-1" onClick={() => setIsOpenMenu(false)}>
            <NavLink href="/">Job offers</NavLink>
            {!!user && userTypeLinks[user.type]}
          </div>
        </div>
        {user ? (
          <>
            <div className="grid content-start gap-6 px-2 row-span-2 mt-2 xl:(row-span-1 mt-4)">
              <NavLink href={settingPath[user.type]}>Settings</NavLink>
            </div>
            <User />
          </>
        ) : (
          <div className="grid content-start gap-6 px-2 row-span-2 mt-2 xl:(row-span-1 mt-4)">
            <div className="grid gap-1" onClick={() => setIsOpenMenu(false)}>
              <NavLink href="/sign-in">Sign in</NavLink>
              <NavLink href="/sign-up">Sign up</NavLink>
            </div>
          </div>
        )}
      </nav>
      <MobileTopBar setIsOpenMenu={setIsOpenMenu} />
    </>
  )
}

export { Navigation }
