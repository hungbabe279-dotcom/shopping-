/* Simple cart implementation using localStorage
   - cart is an object mapping id -> {id, desc, price, qty}
   - Provides update, remove, and checkout (placeholder)
*/
(function(){
  function getCart(){ try{return JSON.parse(localStorage.getItem('simple_cart')||'{}')}catch(e){return{}} }
  function saveCart(c){ localStorage.setItem('simple_cart', JSON.stringify(c)); }
  function formatPrice(n){ return '$' + Number(n).toFixed(2); }

  function render(){
    const cart=getCart();
    const tbody=document.getElementById('cart-body');
    tbody.innerHTML='';
    let total=0; let any=false;
    Object.keys(cart).forEach(id=>{
      const it=cart[id]; if(!it || it.qty<=0) return;
      any=true;
      const amount = it.price * it.qty; total += amount;
      const tr=document.createElement('tr');
      tr.innerHTML = `
        <td>
          <input type="number" min="0" value="${it.qty}" data-id="${it.id}" style="width:56px;padding:6px;margin-right:6px"> 
          <button class="update" data-id="${it.id}">Update</button>
        </td>
        <td>${it.desc}</td>
        <td class="price-cell">${formatPrice(it.price)}</td>
        <td class="price-cell">${formatPrice(amount)}</td>
        <td class="btn-cell"><button class="remove" data-id="${it.id}">Remove Item</button></td>
      `;
      tbody.appendChild(tr);
    });

    if(!any){
      const tr=document.createElement('tr');
      tr.innerHTML='<td colspan="5" style="padding:18px">Your cart is empty.</td>';
      tbody.appendChild(tr);
    } else {
      const tr=document.createElement('tr');
      tr.innerHTML=`<td colspan="3" style="text-align:right;padding:12px;font-weight:700">Total</td><td class="price-cell" style="font-weight:700">${formatPrice(total)}</td><td></td>`;
      tbody.appendChild(tr);
    }

    // wire buttons
    document.querySelectorAll('button.update').forEach(b=>b.addEventListener('click',e=>{
      const id=b.dataset.id; const input = document.querySelector('input[data-id="'+id+'"]');
      const val = parseInt(input.value)||0; const cart=getCart();
      if(val<=0){ delete cart[id]; } else { cart[id].qty = val; }
      saveCart(cart); render();
    }));

    document.querySelectorAll('button.remove').forEach(b=>b.addEventListener('click',e=>{
      const id=b.dataset.id; const cart=getCart(); delete cart[id]; saveCart(cart); render();
    }));
  }

  // Checkout placeholder
  document.addEventListener('DOMContentLoaded', function(){
    render();
    const checkout = document.getElementById('checkout');
    if(checkout){ checkout.addEventListener('click', function(){
      const cart = getCart(); if(Object.keys(cart).length===0){ alert('Your cart is empty.'); return }
      // Placeholder: just clear cart and thank user
      localStorage.removeItem('simple_cart'); alert('Thank you — (checkout simulated).'); render();
    }); }
  });

})();
