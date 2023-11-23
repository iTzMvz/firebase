<script setup>
import { reactive, onMounted, ref } from 'vue';
import taskService from '@/service/taskService';

const tarefa = reactive({
  titulo:'',
  descricao:''
})

const tarefas = ref([]);

async function adicionarTarefa(){
  if(tarefa.id){
    await taskService.update(tarefa); 
  } else{
    await taskService.create(tarefa);
  }
  delete tarefa.id;
  tarefa.titulo = '';
  tarefa.descricao = '';
  tarefas.value = await taskService.getAll();
 }
onMounted(async () => {
  const data = await taskService.getAll();
  tarefas.value = data;
  
});
async function editarTarefa(editarParaEditar){
Object.assign(tarefa, editarParaEditar);
}
async function excluirTarefa(tarefaParaExcluir){
  await taskService.delete(tarefaParaExcluir);
  tarefas.value = await taskService.getAll();
  
}
</script>
<template>
<h1>
  Tarefas
</h1>
<div>
  <input type="text" v-model="tarefa.titulo" placeholder="Titulo">
  <input type="text" v-model="tarefa.descricao" placeholder="Descrição">
  <input type="text" v-model="tarefa.id">
  <button @click="adicionarTarefa()">Adicionar</button>
  <hr>
  <div>
    <ul>
      <li v-for="tarefa in tarefas" :key="tarefa.id">
      <h3> {{ tarefa.titulo }} </h3>
      <p> {{ tarefa.descricao }} </p>
      <button @click="editarTarefa(tarefa)">Editar</button>
      <button @click="excluirTarefa(tarefa)">Excluir</button>
      </li>
    </ul>
  </div>
</div>
</template>

<style>
</style>
