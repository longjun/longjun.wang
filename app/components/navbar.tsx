import Link from "next/link"

const navItems = [
  {
    path: '/',
    name: '关于'
  },
  {
    path: '/writing',
    name: '思考'
  },
  {
    path: '/photography',
    name: '光影'
  }
]


export function Navbar() {
  return (
    <nav className="flex flex-row items-start justify-center space-x-5">
      {navItems.map((item)=>{
        return <NavItem key={item.path} path={item.path} name={item.name} />
      })}
    </nav>
  )
}

function NavItem({ path, name }: { path: string; name: string}) {
  return (
    <Link key={path} href={path}>
      <span className="uppercase text-sm leading-6 font-semibold">{name}</span>
    </Link>
  )
}
