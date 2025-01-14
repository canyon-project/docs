const t = (key) => key;
export default {
  logo: () => (
    <div
      className="flex hover:nx-opacity-75 items-center"
      onClick={() => {
        window.location.href = "/";
      }}
    >
      <img src="/logo.svg" style={{ width: "32px" }} alt="" />
      <div className="mx-2 font-extrabold hidden md:inline select-none">
        CANYON
      </div>
      <div className="text-gray-600 font-normal hidden lg:!inline whitespace-no-wrap">
        JavaScript code coverage solution
      </div>
    </div>
  ),
  project: {
    link: 'https://github.com/canyon-project/canyon'
  },
  editLink: {
    component: ({ children, filePath, className }) => (
      <a
        className={className}
        target={"_blank"}
        href={`https://github.com/canyon-project/docs/blob/main/${filePath}`}
      >
        {children}
      </a>
    ),
  },
  feedback: {
    useLink: () => `https://github.com/canyon-project/canyon/issues/new`,
  },
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://nextra.site" target="_blank">
          Trip.com
        </a>
        .
      </span>
    )
  },
}
