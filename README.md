# IrisWebDesigner
Визуальный ВэбДизайнер для IRIS 
В качестве программы визуализации контролов используется Chrome.

Для развертывания необходимо 
1) Скопировать файлы в папку D:\Intersystems\Cache\CSP\sys\WebDesigner
2) Импортировать классы из выгрузки %ZWebDesigner.PKG
3) Установить систему контроля версий %ZWebDesigner.SourceControll в используемую область имен.
 <pre>
     d ##class(%ZWebDesigner.SourceControll).InstallSorceControllAllNameSpace("USER") // Установить контроль версии для области имен USER
     d ##class(%ZWebDesigner.SourceControll).InstallSorceControllAllNameSpace() //Установить контроль версии на все области имен
 </pre>
После этих действий в студии (в области имен) в контекстном меню появится кнопку запуска визуального дизайнера
   "Cache Web Builder" -> "Designer"