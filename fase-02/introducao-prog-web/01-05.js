var name = 'Paulo'

function primeiro () {
  console.log(`1º diz: ${name}`) // 1º diz: Paulo
  segundo()
  function segundo () {
    let name = 'Paulo'
    console.log(`2º diz: ${name}`) // 2º diz: Amanda
    terceiro()
    function terceiro() {
      console.log(`3º diz: ${name}`) // 3º diz: Amanda
    }
  }
}

primeiro()