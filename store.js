const KEY = 'products.json';
export const WHATSAPP = '967771166259';

export function loadProducts(){
  const raw = localStorage.getItem(KEY);
  if(!raw){
    // initial demo data (same as your old array)
    const demo = [
      {id:1, name:'لاصقات درجة اولى', image:'1.jpg', price:500, desc:'لاصقات عالية الجودة 3M'},
      {id:2, name:'كرسي مكينه', image:'2.jpg', price:1200, desc:'كرسي مكينه جديد'},
      {id:3, name:'بوشات مقص', image:'3.jpg', price:300, desc:'بوشات مقص أمامي'},
      {id:4, name:'دبة ماء راجع', image:'4.jpg', price:700, desc:'دبة ماء راجع استيراد'},
      {id:5, name:'صدمات اماميه', image:'5.jpg', price:2000, desc:'صدمات أصلية'},
      {id:6, name:'كشفات ضبابيه', image:'6.jpg', price:400, desc:'LED ضبابية'},
      {id:7, name:'اصتبات خلفيه', image:'7.jpg', price:600, desc:'اصتبات خلفية تويوتا'},
      {id:8, name:'مرايات سيارات', image:'8.jpg', price:350, desc:'مرايات كهربائية'},
      {id:9, name:'كشافات صالون 2018', image:'9.jpg', price:800, desc:'صالون داخلي LED'}
    ];
    saveProducts(demo);
    return demo;
  }
  return JSON.parse(raw);
}

export function saveProducts(arr){
  localStorage.setItem(KEY, JSON.stringify(arr));
}
