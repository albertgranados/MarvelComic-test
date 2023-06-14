interface GridProps {
  children: React.ReactNode
}

export default function Grid({ children }: GridProps) {
  return (
    <>
      <ul
        className={`grid gap-6 p-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6`}
      >
        {children}
      </ul>
    </>
  )
}
