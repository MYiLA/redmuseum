export default {
  // el - элемент, к которому будет привязываться директива
  // bindings - только чтение. Все свойства, передаваемые в директиву
  // vnode - виртуал нод, объект виртуального дерева, где будет храниться эта директива.
  bind(el, bindings, vnode) {
    console.log('bind')

    let delay = 0;
    if (bindings.modifiers['delay']) {
      delay = 2000;
    };
    const fontModifier = bindings.modifiers['font']
    if (fontModifier) {
      el.style.fontSize = '50px';
    };

    setTimeout(() => {
      // bindings.arg свойство директивы после двоеточия
      // bindings.value - свойство директивы после знака =
      const arg = bindings.arg;
      el.style[arg] = bindings.value;
    }, delay);
    // обращаться к названиям модификаторов необходимо так ['font'], чтобы название не сократилось при минификации

  },
  //     //жизненный этап, когда директива уже есть в DOM-дереве
  //     inserted(el, bindings, vnode){
  //       console.log('inserted');
  //     },
  // // этап, когда при изменении данных обновился родительский компонент, но дочерние еще не обновились
  // // oldVnode - параметр, в котором хранится старая нода до абдейта директивы
  //     update(el, bindings, vnode, oldVnode){
  //       console.log('update');
  //     },
  //     //этап сразу вызывается после update, когда уже обновились дочерние элементы
  //     componentUpdated(el, bindings, vnode, oldVnode){
  //       console.log('component Updated');
  //     },
  //     // этап когда директива была удалена из DOM дерева
  //     unbind(){
  //       console.log('unbind');
  //     },
}

// 42. жизненный цикл директивы
