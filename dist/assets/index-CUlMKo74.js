const handleCopy = (e) => {
  console.log("clicked")
  console.log(e)
  const target = e.currentTarget 
  const text = target?.innerText || '';
  //@ts-ignore
  const name = e.currentTarget.dataset?.name || '';

  alert(` ${name} کپی شد ✅`)
  navigator.clipboard.writeText(text);
}