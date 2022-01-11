import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sessionList = [
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}, 
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}, 
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}, 
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}, 
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}, 
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}, 
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}, 
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}, 
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}, 
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}, 
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}, 
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}, 
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}, 
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}, 
    {summaryDate: '2017-01-23', summaryShootingRange: 'Vernand', summaryNumParticipants: '5', summaryPrice: '222'}
  ]

  participants = ['José', 'Melvyn', 'Alex', 'Alex', 'Alex', 'Alex', 'Alex', 'Alex']

  ammos = [{caliber: '7.62x39mm', amount: '256'}, {caliber: '5.56x45mm', amount: '100'}]

  weapons = ['AR M1F', 'HK MR223A5']
}
