# Components, Templates & Databinding

``` bash
ng generate component other # 新建一个名为'other’的组件并自动引入
ng g c other # 缩写
ng g c another --flat -is -it # 当前目录，行内样式，行内模板

```

### The Component Lifecycle

``` bash
# Lifecycle Hook --- Timing
1 ngOnChanges    --- Before 2 and when data-bound property value change
2 ngOnInit       --- On Component Initialization, after first ngOnChanges
3 ngDoCheck      --- During every Angular2 Change Detection Cycle
4 ngAfterContentInit --- After Inserting Content(<ng-content>)
5 ngAfterContentChecked --- after every check of inserted content
6 ngAfterViewInit --- After initializing the component\' views/child views
7 ngAfterViewChecked -- After every check of the compoennt\'s views/child views
8 ngOnDestroy --- Just before Angular2 destroy the directive /component
```
