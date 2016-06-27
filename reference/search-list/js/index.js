(function() {
  // TODO: be more elegant here
  function format(text) {
    return text.replace(/ /g,'').replace(/(<([^>]+)>)/ig, '').toLowerCase();  
  }
  
  var SearchOnList = {
    $LIST           : '[data-search-on-list=list]',
    $SEARCH         : '[data-search-on-list=search]',
    $LIST_ITEM      : '[data-search-on-list=list-item]',
    $COUNTER        : '[data-search-on-list=counter]',
    TEMPLATE_EMTPY  : '<li class="list-item list-item--disable">No results found</li>', 
    
    
    init: function($element) {
      this.items = [];
      this.itemsMatched = [];
      
      this.$element = $element;
      this.$list = this.$element.find(this.$LIST);
      this.$search = this.$element.find(this.$SEARCH);
      this.$counter = this.$element.find(this.$COUNTER);
      
      this.items = this._getAllItems();
      this.itemsMatched = this.items;
      
      this._updateCounter();
      this._handleResults();
      this._setEventListeners();
    },
    
    _setEventListeners: function() {
      this.$search
        .on('keyup', $.proxy(this._onKeyup, this))
        .on('query:changed', $.proxy(this._handleQueryChanged, this))
        .on('query:results:some', $.proxy(this._handleResults, this))
        .on('query:results:none', $.proxy(this._handleNoResults, this))
    },
    
    _onKeyup: function() {
      var query = this.$search.val(),
          previousQuery = this.$search.data('previousQuery', query);
      
      // TODO: Decide when query actually changed
      if (this._queryChanged()) {
        this.$search.trigger('query:changed', { 
          query: query, 
          previousQuery: previousQuery 
        });
      }
    },
    
    _queryChanged: function() {
      var query = this.$search.val();
      if ($.trim(query).length === 0 && this.$search.data('previousQuery') === undefined) {
        return false;
      }
      return true;
    },
    
    _handleQueryChanged: function(e, data) {   
      this.itemsMatched = this.items.map(function(item) {
        if (format(item.name).match(format(data.query))) {
          return { 
            name: item.name, 
            visible: true 
          } 
        }
        return { 
          name: item.name, 
          visible: false
        } 
      });
      
      this._render();
      this._updateCounter();
    },
    
    _handleNoResults: function() {
      this.$list.html(this.TEMPLATE_EMTPY);
    },
    
    _handleResults: function() {
      this.$list.empty().append(this._renderItemsVisible())
    },
    
    _someItemsVisible: function() {
      return this.itemsMatched.some(function(item) { 
        return item.visible;
      });
    },
    
    _render: function() {
      (this._someItemsVisible()) ?
        this.$search.trigger('query:results:some') :
        this.$search.trigger('query:results:none'); 
    },
    
    _updateCounter: function() {
      (this._someItemsVisible()) ?
        this.$counter.text(this._renderItemsVisible().length) :
        this.$counter.text('');
    },
    
    _getAllItems: function() {
      var $items = this.$list.find(this.$LIST_ITEM);
      
      return $items.map(function() {
        var $item = $(this);
        
        return {
          name: $item.html(),
          visible: true
        };
      }).toArray();     
    },
    
    _renderItemsVisible: function() {
      var itemInTemplate;
      return this.itemsMatched.sort(function(a, b) {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1;
        return 0;
      }).reduce(function(items, item) {
        itemInTemplate = '<li class="list-item" data-search-on-list="list-item">' + item.name + '</li>';
        if (item.visible) {
          items.push(itemInTemplate);
        }  
        return items;
      }, []);
    }
  };
  
  window.SearchOnList = SearchOnList;
})();

SearchOnList.init($('[data-behaviour=search-on-list]'));