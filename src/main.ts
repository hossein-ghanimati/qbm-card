

const handleCopy = (e: Event) => {
  console.log("clicked")
  console.log(e)
  const target = e.currentTarget as HTMLElement;
  const text = target?.innerText || '';
  //@ts-ignore
  const name = e.currentTarget.dataset?.name || '';

  alert(` ${name} کپی شد ✅`)
  navigator.clipboard.writeText(text);
}
