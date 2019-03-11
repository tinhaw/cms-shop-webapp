const o={
    "code": 0,
    "msg": "",
    "data": {
      "list": function({
        _req,
        Mock
      }) {
        const ids = _req.params.ids.split(",");
        const res = [];
        ids.forEach(id => {
          let item = {
            id: parseInt(id),
            src: Mock.mock({
              "array|1": [
                "http://img12.360buyimg.com/n7/jfs/t20188/38/1866713650/284264/3624bf2b/5b3b4194Nada4c041.jpg",
                "http://img10.360buyimg.com/n7/jfs/t8929/149/2405378839/254338/66dd143d/59cda962N323b5446.jpg",
                "http://img10.360buyimg.com/n7/jfs/t17689/292/1247919821/159809/1c87eb05/5ac1eae4Nce7c8b00.jpg"
              ]
            }),
            title: Mock.mock({
              "array|1": [
                "华为 HUAWEI nova 2 Plus 4GB+128GB 草木绿 移动联通电信4G手机 双卡双待",
                "华为 HUAWEI nova 青春版 4GB+64GB 珍珠白 移动联通电信4G手机 双卡双待",
                "华为 HUAWEI nova 青春版 4GB+64GB 珍珠白 移动联通电信4G手机 双卡双待"
              ]
            }),
            price: Mock.mock({
              "array|1": [2199, 1899, 5688]
            }),
            stock: Mock.mock({
              "number|1-100": 100
            }),
          };
          res.push(item);
        });
        return res;
  
      }
  
  
    }
  }