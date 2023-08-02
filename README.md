# Projeto TODO-List

O projeto **TODO-list** é um projeto responsivo, foi feito no **Figma** e implementado com HTML, CSS e Javascript, e usa o local storage do navegador como base de dados para salvar as tasks do usuário. o desenvolvimento durou 3 dias, com duração em média de 6 a 8 horas de trabalho.

Depois de criado o design WEB no Figma e um braking point a 360px para resposividade, foi iniciada a implementação em código que começou que começou pelo layout em html e css. Em seguida iniciou-se a implementação dos códigos Javascript para funcionamento, o primeiro foi o gráfico no arquivo graph.js que seria usado pelos próximos códigos no arquivo tasks.js. O gráfico é feito com uma técnica de linear-gradient CSS. Em seguida foi implementado o CRUD das tasks no local storage junto a renderização gráfica de tais, a sequencina foi:

R- Verificar se já haviam tasks salvas no local storage na data escolhida pelo usuário.

C- Criar uma nova task e adiciona-la a tela e conta-la no gráfico.

U- Editar uma task e salva-la no local storage.

D- Deletar uma taks dos dados de determinda data.

Durante o projeto houveram correções de bugs de algumas funções.

### Funcionamento do projeto para o usuário:

Para executar o aplicativo TODO-List basta executar o arquivo **index.html** na pasta do aplicativo.

Assim que iniciado no navegador de sua escolha o app selecionara automaticamente a data do dia atual. Para selecionar outra uma data específica basta digita-la no campo de data ou clicar no calêndario e selecionar uma data.

Selecionada a data de sua lista de tarefas você pode clicar no botão **Adicionar Tarefa** ou no icone **+** abaixo na lista. Assim que clicar o um campo de texto será adicionado a lista e basta digitar o a sua tarefa.

Para editar uma tarefa existente de um duplo-clique no text da tarefa e edite-a, clique fora da tarefa com o mouse e ela será salva automaticamente.

Para marcar ou desmarcar uma tarefa como feita basta clicar no **Icone de relógio** ou **Visto** do lado esquedo da tarefa e ela será salva automaticamente.

Para excluir uma tarefa clique no icone **✖** vermelho ao lado direito da tarefa e ela será excluida.